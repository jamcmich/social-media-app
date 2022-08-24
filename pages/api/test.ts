// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fetchData from '../../libs/fetchData';

type ResponseData = {
	data: object;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	res.status(200).json({ data: await fetchData() });
}

