import * as React from 'react'
import * as rocket from '../assets/rocket_desktop.svg'
import * as microscope from '../assets/microscope.svg'
import * as food_tech from '../assets/food_tech.svg'
import * as uni_liason from '../assets/uni_liason.svg'
import * as trade from '../assets/trade.svg'
import * as industrial_robot from '../assets/industrial_robot.svg'
import * as government from '../assets/government.svg'
import * as wind_farm from '../assets/wind_farm.svg'
import * as healthcare from '../assets/healthcare.svg'
import * as evaluation from '../assets/evaluation.svg'
import * as guatemala_innovation from '../assets/guatemala_innovation.svg'
import * as linkedin from '../assets/linkedin.svg'
import AssignmentItem from './AssignmentItem'

export default function Assignments() {
    return (
        <r-grid id="references" class="p-12" columns="8">
            <r-cell class="flex justify-center" span="row">
                <h1 className="text-center max-w-6xl m-4">
                Corporate Solutions has lead over 100 assignments in emerging countries
                </h1>
            </r-cell>
            <r-cell class="my-16 flex flex-wrap justify-center" span="row">
                <AssignmentItem image={rocket}
                    title="Turkey"
                    description="Support to Young Entrepreneurship in the Ankara
                    region; Business Centres for promoting SMEs and investment in
                    6 regions at the Chambers of Commerce."/>
                <AssignmentItem image={microscope}
                    title="Burkina Faso"
                    description="Pre-feasibility Study of the first
                    Technopolis-Science Park in the Ouagadougou Capital."/>
                <AssignmentItem image={food_tech}
                    title="Cameroon"
                    description="Food technology Centre feasibility analysis."/>
                <AssignmentItem image={uni_liason}
                    title="Algeria"
                    description="Support to the universities‐enterprise
                    technical and liaison centres for the Ministry of Education and Research"/>
                <AssignmentItem image={trade}
                    title="West Africa"
                    description="Formulation of the regional trade program for
                    the EU 10th EDF - Nigeria and Burkina Faso."/>
                <AssignmentItem image={industrial_robot}
                    title="Mozambique"
                    description="Evaluation of the Business Climate improvement
                    strategy and SME support program of Ministry of Industry –
                    appraisal of a project to support industrial investments and SMEs"/>
                <AssignmentItem image={government}
                    title="FYR Macedonia"
                    description="Training in IPA funds management, PCM and
                    project feasibility to staff of chambers, associations
                    and of 10 government ministries."/>
                <AssignmentItem image={wind_farm}
                    title="Romania"
                    description="Design and support of industrial clusters for
                    Ministry of EU Integration; design and management of six
                    business incubators in regions for the Ministry of Natural
                    Resources."/>
                <AssignmentItem image={healthcare}
                    title="Jordan"
                    description="Evaluation of a labour and social security
                    simplification programme for SMEs."/>
                <AssignmentItem image={guatemala_innovation}
                    title="Guatemala and Costa Rica"
                    description="Implementation of National Innovation program,
                    and evaluation of Quality/Innovation programmes"/>
                <AssignmentItem image={evaluation}
                    title="Paraguay, Uruguay and Argentina"
                    description="Formulation and evaluation of business and
                    innovation programmes; implementation of an SME restructuring
                    programme."/>
                <AssignmentItem image={linkedin}
                    title="And More..."
                    href="https://www.linkedin.com/in/juliofuster/"
                    description="Follow us in Social Media"/>
            </r-cell>
        </r-grid>
    )
}
