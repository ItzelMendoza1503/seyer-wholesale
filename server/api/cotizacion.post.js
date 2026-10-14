
import pool from '../utils/db.js'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const nombre = String(body?.nombre || '').trim()
    const empresa = String(body?.empresa || '').trim()
    const correo = String(body?.correo || '').trim()
    const telefono = String(body?.telefono || '').trim()
    const servicio = String(body?.servicio || '').trim()
    const producto = String(body?.producto || '').trim()
    const mensaje = String(body?.mensaje || '').trim()
    const fecha = body?.fecha || null
    const cantidad = body?.cantidad === '' ||
        body?.cantidad == null
        ? 1
        : Number(body.cantidad)

    if (
        !nombre ||
        !correo ||
        !telefono ||
        !servicio ||
        body?.acepta !== true
    ) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Completa los campos obligatorios y acepta la confirmación.'
        })
    }

    if (
        !Number.isInteger(cantidad) ||
        cantidad < 1
    ) {
        throw createError({
            statusCode: 400,
            statusMessage: 'La cantidad debe ser un número entero mayor que cero.'
        })
    }

    if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)
    ) {
        throw createError({
            statusCode: 400,
            statusMessage: 'El correo electrónico no es válido.'
        })
    }

    const conexion = await pool.getConnection()

    try {
        await conexion.beginTransaction()

        const [cliente] = await conexion.execute(
            `INSERT INTO clientes
        (nombre, empresa, correo, telefono)
       VALUES (?, ?, ?, ?)`,
            [
                nombre,
                empresa || null,
                correo,
                telefono
            ]
        )

        await conexion.execute(
            `INSERT INTO solicitudes_cotizacion
        (id_cliente, servicio, producto, cantidad, fecha, mensaje, acepta)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                cliente.insertId,
                servicio,
                producto || 'No especificado',
                cantidad,
                fecha,
                mensaje || null,
                true
            ]
        )

        await conexion.commit()

        return {
            ok: true,
            mensaje: 'La solicitud de cotización se guardó correctamente.'
        }
    } catch (error) {
        await conexion.rollback()
        console.error('Error al guardar la cotización:', error)

        throw createError({
            statusCode: 500,
            statusMessage: 'No fue posible guardar la solicitud. Inténtalo más tarde.'
        })
    } finally {
        conexion.release()
    }
})
