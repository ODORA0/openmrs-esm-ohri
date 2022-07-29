import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { EmptyStateComingSoon } from 'openmrs-esm-ohri-commons-lib';

interface OverviewListProps {
  patientUuid: string;
}

const ServiceSummaryOverviewList: React.FC<OverviewListProps> = ({ patientUuid }) => {
  const { t } = useTranslation();

  const headerTitle = t('serviceSummary', 'HIV C&T Patient Summary');
  const displayText = t('serviceSummary', 'HIV C&T Patient Summary');

  return (
    <>
      <EmptyStateComingSoon headerTitle={headerTitle} displayText={displayText} />
    </>
  );
};

export default ServiceSummaryOverviewList;
