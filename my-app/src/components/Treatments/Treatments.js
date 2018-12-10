import React from 'react';
import Nav from '../nav';
import TreatmentButtons from './TreatmentButtons';

import FaceTreatments from './Face/FaceTreatments'
import Massage from './Massage/Massage';
import BodyTreatments from './BodyTreatments/BodyTreatments';
import LashesAndBrows from './LashesAndBrows/LashesAndBrows';

/* Display treatment page */
function Treatments (){
	return (
	    <div>
		    <Nav/>
	        <h1>VÅRA BEHANDLINGAR</h1>
			<TreatmentButtons /> 
			<FaceTreatments />
			<Massage />
			<BodyTreatments />
			<LashesAndBrows />

	    </div>
	);
};

export default Treatments;