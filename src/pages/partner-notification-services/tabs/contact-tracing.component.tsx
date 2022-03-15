import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EmptyState from '../../../components/empty-state/empty-state.component';
import EncounterList, { EncounterListColumn, getObsFromEncounter } from '../../../components/encounter-list/encounter-list.component';
import { deathFormEncounterType_UUID } from '../../../constants';

interface ContactTracingListProps {
  patientUuid: string;
}

const columnsLab: EncounterListColumn[] = [
  {
    key: 'contactDate',
    header: 'Contact Date',
    getValue: encounter => {
      return getObsFromEncounter(encounter,  true);
    },
  },
  {
    key: 'contactmethod',
    header: 'Contact Method',
    getValue: encounter => {
      return getObsFromEncounter(encounter,  true);
    },
  },
  {
    key: 'contactOutcome',
    header: 'Contact Outcome',
    getValue: encounter => {
      return getObsFromEncounter(encounter,  true);
    },
  },

  {
    key: 'actions',
    header: 'Actions',
    getValue: encounter => {
      const baseActions = [
        {
          form: { name: 'death_form', package: 'hiv' },
          encounterUuid: encounter.uuid,
          intent: '*',
          label: 'View Details',
          mode: 'view',
        },
        {
          form: { name: 'death_form', package: 'hiv' },
          encounterUuid: encounter.uuid,
          intent: '*',
          label: 'Edit Details',
          mode: 'edit',
        },
      ];
      return baseActions;
    },
  },
];

const ContactTracingList: React.FC<ContactTracingListProps> = ({ patientUuid }) => {
  const { t } = useTranslation();

  const headerTitle = t('contactTracing', 'Contact Tracing');
  const displayText = t('contactTracing', 'Contact Tracing');

  return  (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={deathFormEncounterType_UUID}
      form={{ package: 'hiv', name: 'death_form' }}
      columns={columnsLab}
      description={displayText}
      headerTitle={headerTitle}
      dropdownText="Add"
    />
  );
};

export default ContactTracingList;