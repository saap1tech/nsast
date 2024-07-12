import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Here some answers of some questions</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <span ><Accordion.Header>What is the acceptance rate at the school?</Accordion.Header></span>
                    <Accordion.Body>
                    The acceptance rate at the Higher School of Autonomous Systems for the year 2023 is 16.52.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What are the studied subjects?</Accordion.Header>
                    <Accordion.Body>
                    <table>
        <thead>
            <tr>
                <th><span>Module in first year</span> </th>
                <th>Coefficient</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Analysis</td>
                <td>S1 : 6 / S2 : 5</td>
            </tr>
            <tr>
                <td>Algebra</td>
                <td>S1 : 3 / S2 : 4</td>
            </tr>
            <tr>
                <td>Physics</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Chemistry</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Proba-Stat</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Algorithmics</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Human Engineering</td>
                <td>1</td>
            </tr>
            <tr>
                <td>General Economics</td>
                <td>1</td>
            </tr>
            <tr>
                <td>English</td>
                <td>1</td>
            </tr>
            <tr>
                <td>French</td>
                <td>1</td>
            </tr>
        </tbody>
    </table>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What is Autonomous systems </Accordion.Header>
                    <Accordion.Body>
                    <p>An autonomous system is one that can achieve a given set of goals in a changing environment—gathering information about the environment and working for an extended period of time without human control or intervention. Driverless cars and autonomous mobile robots (AMRs) used in warehouses are two common examples.</p>
                    <p>Autonomy requires that the system be able to do the following:</p>
                    <ul>
                        <li>Sense the environment and keep track of the system’s current state and location.</li>
                        <li>Perceive and understand disparate data sources.</li>
                        <li>Determine what action to take next and make a plan.</li>
                        <li>Act only when it is safe to do so, avoiding situations that pose a risk to human safety, property or the autonomous system itself.</li>
                    </ul>
                    <h6>according to <a href='https://blackberry.qnx.com/en/ultimate-guides/autonomous-systems#:~:text=An%20autonomous%20system%20is%20one,warehouses%20are%20two%20common%20examples.' target='_blank'>black berry website</a> check for more information.</h6>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header></Accordion.Header>
                    <Accordion.Body>
                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;