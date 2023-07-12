import { NextApiRequest, NextApiResponse } from 'next';

const fs = require('fs');
const path = require("path");

// const storagePath = 'data/experiences.json';
const storagePath = '/tmp/experiences.json';
const filePath = storagePath;
// const filePath = path.resolve(process.cwd(), storagePath);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('req.method', req.method)

    try {
        if (req.method === 'GET') {
            const experience = getExperience(req, res);
            res.status(200).json(experience)
        } else if (req.method === 'PUT') {
            updateExperience(req);
            res.status(200).json('ok');
        }
    } catch (e: any) {
        res.status(500).json({
            statusCode: 500,
            message: e.message || 'Error!',
        })
    }
}

function getExperience(req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query;
    const experiences = getExperiencesData();
    const i = experiences.findIndex((exp: any) => exp.id === id);
    if (i > -1) {
        return experiences[i];
    }
}

function updateExperience(req: NextApiRequest) {
    const { id } = req.body;
    const experiences = getExperiencesData();
    const i = experiences.findIndex((exp: any) => exp.id === id);
    if (i > -1) {
        experiences[i] = req.body;
        saveExperienceData(experiences);
        console.log(`experienceId: ${id} was updated succefully`);
    }
}

// util functions
const saveExperienceData = (data: any) => {
    const stringifyData = JSON.stringify(data,null,2);
    fs.writeFileSync(filePath, stringifyData);
}
const getExperiencesData = () => {
    const jsonData = fs.readFileSync(filePath);
    return JSON.parse(jsonData.toString());   
}