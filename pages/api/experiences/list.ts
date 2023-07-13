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
            res.status(200).json(listExperiences(req.query))
        }
    } catch (e: any) {
        res.status(500).json({
            statusCode: 500,
            message: e.message || 'Error!',
        })
    }
}

function listExperiences(filters: any) {
    console.log({filters});
    const { source } = filters;
    const experiences = getExperiencesData();
    if (source) {
        return experiences.filter((exp: any) => exp.source === source);
    }
    return experiences;
    
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
