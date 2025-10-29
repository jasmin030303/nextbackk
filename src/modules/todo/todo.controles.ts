import { Request, Response } from "express";
import prisma from "../../config/prisma";




const getAllData = async (req: Request, res: Response) => {
  const user = await prisma.user.findMany();
  try {
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getAllData: ${error}`,
    });
  }
};

const postAllData = async (req: Request, res: Response) => {
  try {
    const { name, age, url, emaill } = req.body;
    const post = await prisma.user.create({
      data: {
        name,
        age,
        url,
        emaill,
      },
    });
    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in postAllData: ${error}`,
    });
  }
};



const deleteData = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const num = prisma.user.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({
      success: true,
      data: num,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in dellData: ${error}`,
    });
  }
};



const patchData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const index = prisma.user.update({
      where: { id: Number(id) },
      data: name,
    });

    res.status(200).json({
      success: true,
      index,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Server in upDateData: ${error}`,
    });
  }
};


const upDateData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    const index = prisma.user.update({
      where: { id: Number(id) },
      data: name,
    });

    res.status(200).json({
      success: true,
      index,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Server in upDateData: ${error}`,
    });
  }
};




export default {
  getAllData,
  postAllData,
  deleteData,
  patchData,
  upDateData
};
