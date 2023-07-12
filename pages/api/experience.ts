import { NextApiRequest, NextApiResponse } from 'next';

const fs = require('fs');
const path = require("path");


const storagePath = 'data/experiences.json';
const filePath = path.resolve(process.cwd(), storagePath);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('req.method', req.method)

    try {
        if (req.method === 'GET') {
            const experience = getexperience(req, res);
            res.status(200).json(experience)
        } else if (req.method === 'PUT') {
            updateexperience(req);
            res.status(200).json('ok');
        }
    } catch (e: any) {
        res.status(500).json({
            statusCode: 500,
            message: e.message || 'Error!',
        })
    }
}

function getexperience(req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query;
    const experiences = getexperiencesData();
    const i = experiences.findIndex((exp: any) => exp.id === id);
    if (i > -1) {
        return experiences[i];
    }
}

function updateexperience(req: NextApiRequest) {
    const { id } = req.body;
    const experiences = getexperiencesData();
    const i = experiences.findIndex((exp: any) => exp.id === id);
    if (i > -1) {
        experiences[i] = req.body;
        saveexperienceData(experiences);
        console.log(`experienceId: ${id} was updated succefully`);
    }
}

// util functions
const saveexperienceData = (data: any) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(filePath, stringifyData)
}
const getexperiencesData = () => {
    const jsonData = fs.readFileSync(filePath);
    return JSON.parse(jsonData.toString());   
}