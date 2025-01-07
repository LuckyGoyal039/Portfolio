import React from 'react';
import myData from '../../Data/myData'; // Make sure this path is correct
import './skills.css';
import { FaHtml5 } from "react-icons/fa"; // Correct import statement for Font Awesome icons
import { IoLogoCss3 } from "react-icons/io";
import { MdOutlineScience } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { IoLogoFirebase } from "react-icons/io5"
import { SiJquery } from "react-icons/si";

export default function Skills() {
    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'HTML':
                return <FaHtml5 />;
            case 'CSS':
                return <IoLogoCss3 />;
            case 'JavaScript':
                return <IoLogoJavascript />;
            case 'ReactJS':
                return <GrReactjs />;
            case 'NextJS':
                return <TbBrandNextjs />;
            case 'Bootstrap':
                return <FaBootstrap />;
            case 'NodeJs':
                return <FaNodeJs />;
            case 'ExpressJs':
                return <SiExpress />;
            case 'Sequelize ORM':
                return <SiSequelize />;
            case 'SQL':
                return <BsFiletypeSql />;
            case 'Firebase':
                return <IoLogoFirebase />;
            case 'Jquery':
                return <SiJquery />;
            case 'EJS':
                return <FaNodeJs />;

            default:
                return <MdOutlineScience />;
        }
    };

    return (
        <section id='skills' className='px-5 '>
            <div className='d-flex justify-content-center mb-4'>
                <h1>Skills</h1>
            </div>
            <div className='subContainer'>
                <div className='frontend'>
                    <div className='d-flex justify-content-center my-3' >
                        <h3>Frontend Development</h3>
                    </div>
                    <div className='skillContainer'>
                        {myData.skills.frontend.map((item, index) => (
                            <div key={index}>
                                <span className='icons'>{renderIcon(item.name)}</span>
                                <span className='skillName'>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='backend'>
                    <div className='d-flex justify-content-center my-3' >
                        <h3>Backend Development</h3>
                    </div>
                    <div className='skillContainer'>
                        {myData.skills.backend.map((item, index) => (
                            <div key={index} className='d-flex'>
                                <span className='icons'>{renderIcon(item.name)}</span>
                                <span className='skillName'>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
