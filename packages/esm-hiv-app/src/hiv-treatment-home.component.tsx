import { OHRIWelcomeSection } from '@ohri/openmrs-esm-ohri-commons-lib';
import React from 'react';
import CTSummaryTiles from './views/hts/care-and-treatment/summary-tiles/ct-summary-tiles.component';
import CTHomePatientTabs from './views/hts/patient-list-tabs/ct-patient-list-tabs.component';

const Homecomponent = () => {
  return (
    <div>
      <OHRIWelcomeSection title="Care and Treatment" />
      <CTSummaryTiles />
      <CTHomePatientTabs />
    </div>
  );
};

export default Homecomponent;
