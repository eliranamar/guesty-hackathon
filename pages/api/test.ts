export default function handler(req, res) {
    console.log('req.method', req.method)

    try {
        res.status(200).json({ name: 'Denisssss!@@#!#!%@ :-D O_o' })
    } catch (e) {
        res.status(500).json({
            statusCode: 500,
            message: e.message || 'Error!',
        })
    }
}
