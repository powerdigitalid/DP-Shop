import fs from 'fs';

export const config = {
    api: {
        bodyParser :{
            sizeLimit: '4mb',
        }
    }
}

export default async function handler(req, res) {
    let data = req.body.file.replace(/^data:image\/\w+;base64,/, "");
    let buf = Buffer.from(data, 'base64');
    fs.writeFileSync(req.body.folder + req.body.filename, buf);
    res.status(200).json({message: 'success'});
}