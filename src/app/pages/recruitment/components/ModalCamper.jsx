"use client"
import { Chip } from "@nextui-org/react";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import camperMen from "../../../../../public/img/camperMen.png";
import camperWoman from "../../../../../public/img/camperWoman.png";
import github from "../../../../../public/img/campersGithub.svg";
import linkedin from "../../../../../public/img/campersLinkedin.svg";

export default function ModalCamper({ camper, getModalInfoCampers }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalInfo, setModalInfo] = useState();
  useEffect(() => {
    const getAllInfo = async () => {
      const info = await getModalInfoCampers(camper.idUsuario);
      console.log(info);
      setModalInfo(info);
    }
    getAllInfo();
  }, [getModalInfoCampers, camper]);
  return (
    <>
      <Button className="w-10/12 m-auto my-3 text-lg text-[#000000] bg-[#6a7bff] font-bold rounded-lg p-2" onPress={onOpen}>Ver más</Button>
      <Modal
        size="xl"
        className="shadow-lg  shadow-gray-500"
        scrollBehavior="inside"
        placement="center"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-center uppercase gap-1">
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Camper name and photo */}
                  <div className="flex flex-col text-[#0F2167] text-xl justify-center items-center">
                    <p className="text-2xl font-bold uppercase">
                      {camper.nombre}
                    </p>
                    <p className="text-lg text-center font-bold uppercase text-indigo-500">
                      {camper.enfoque.nombre}
                    </p>
                  </div>
                  <div className=" flex justify-center items-center ">
                    <p className="text-xl font-bold text-rose-950">{camper.nivelIdioma}</p>

                  </div>
                </div>
                <Divider className="bg-[#0F2167] opacity-30 my-3" />
                {/* Camper description */}
                <div className="py-2">
                  <h2 className="text-[#0F2167] text-xl font-bold">DESCRIPCIÓN</h2>
                  <p className=" text-md">
                    {camper.acercaDeMi}
                  </p>
                </div>
                {/* Education */}
                <div className="flex flex-col my-4">
             
             <div className="flex items-center">
                    <span className="inline-block rounded bg-blue-600 p-2 text-white me-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <h2 className="text-[#0F2167] font-bold  text-lg ">
                      EDUCACION</h2>
             </div>
                   {
                    modalInfo.educacion.map((education, index) => (
                      <div>
                        <div key={index} className="flex justify-between my-2">
                          <h3 className=" text-md font-bold text-gray-900">
                            {education.titulo}
                          </h3>
                          <p className="text-indigo-500 font-semibold">{education.fecha}</p>
                        </div>
                        <Chip color="primary" radius="sm" variant="bordered" className="mt-1">{education.institucion}</Chip>

                   </div>


                    ))
                   }
                </div>
                {/* Camper experience */}
                <div className="flex flex-col my-4">

                  <div className="flex items-center">
                    <span className="inline-block rounded bg-blue-600 p-2 text-white me-3 ">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </span>
                    <h2 className="text-[#0F2167] font-bold text-lg ">
                      EXPERIENCIA</h2>
                  </div>
                  {
                    modalInfo.experiencia.map((experience, index) => (
                      <div className="my-2">
                        <div key={index} className="flex justify-between ">
                          <h3 className=" text-md font-semibold text-gray-900">
                            {experience.cargo}
                          </h3>
                          <p className="text-indigo-500 font-semibold" >{experience.fecha}</p>
                        </div>
                        <p className="">{experience.descripcionLogros}</p>
                        <Chip color="primary" radius="sm" variant="bordered" className="mt-1">{experience.empresa}</Chip>


                      </div>


                    ))
                  }
                </div>
                {/* Camper hardskills */}
                <div className="flex flex-col my-2">
                  <h2 className="text-[#0F2167] font-bold">HARDSKILLS</h2>
                  <div className="flex flex-wrap gap-2">
                    {
                      camper.skills.map((hardSkill, index) => (
                        <Chip color="warning" size="lg" radius="md" variant="flat" className="mt-1">{hardSkill}</Chip>
                      ))
                    }
                  </div>
                </div>
                {/* Camper softskills */}
                <div className="flex flex-col my-2">
                  <h2 className="text-[#0F2167] font-bold">SOFTSKILLS</h2>
                  <div className="flex flex-wrap gap-2">
                   {
                     modalInfo.skills.map((softSkill, index) => (
                        <Chip color="secondary" size="lg" radius="md"  variant="flat" className="mt-1">{softSkill.competencia}</Chip>
                     ))
                   }
                  </div>
                </div>
                {/* Camper contact */}
                <div className="flex flex-col my-3 justify-center items-center gap-x-10">
                  <div className="flex flex-wrap gap-2">
                    <a href={camper.github} target="_blank" className="font-bold transition hover:scale-110">

                      <Image src={github} className="w-14 mt-2 me-8  " />
                      Github
                     </a>
                    <a href={camper.linkedin} target="_blank" className="font-bold  transition hover:scale-110 ">
                      <Image src={linkedin} className="w-16 " />
                      Linkedin
                    </a>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button size="lg" className="bg-[#E4E4DB] font-bold " onPress={onClose}>
                  Cerrar
                </Button>
                <Button size="lg" className="bg-[#6a7bff] font-bold text-md" onPress={onClose}>
                  Me Interesas
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
