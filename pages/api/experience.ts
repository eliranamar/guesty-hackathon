import { NextApiRequest, NextApiResponse } from 'next';

const fs = require('fs');
const path = require("path");

const storagePath = 'data/experiences.json';
const tmpPath = '/tmp/experiences.json';
const filePath = path.resolve(process.cwd(), storagePath);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('req.method', req.method)

    try {
        if (req.method === 'GET') {
            const { id } = req.query;
            if (id && typeof id === 'string') {
                const experience = getExperience(id);
                res.status(200).json(experience)
            } else {
                res.status(400).json(`Error - please use query url to get a specific id, example: '/api/experience?id=5'`);
            }
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

function getExperience(id: string) {
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
    fs.writeFileSync(tmpPath, stringifyData);
}
const getExperiencesData = () => {
    // if updated - take tmp file
    const jsonData = fs.existsSync(tmpPath) ? fs.readFileSync(tmpPath) : fs.readFileSync(filePath);
    return JSON.parse(jsonData.toString());   
}
