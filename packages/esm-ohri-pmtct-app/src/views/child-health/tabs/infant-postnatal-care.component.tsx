import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  EncounterList,
  EncounterListColumn,
  getMotherName,
  getObsFromEncounter,
} from '@ohri/openmrs-esm-ohri-commons-lib';
import {
  pTrackerIdConcept,
  visitDate,
  hivTestStatus,
  infantPostnatalEncounterType,
  nextVisitDate,
  artProphylaxisStatus,
  linkedToArt,
  breastfeedingStatus,
  outcomeStatus,
  ChildPDateOfBirth,
} from '../../../constants';
import { moduleName } from '../../..';
import { openmrsFetch } from '@openmrs/esm-framework';

interface InfantPostnatalListProps {
  patientUuid: string;
}

const InfantPostnatalList: React.FC<InfantPostnatalListProps> = ({ patientUuid }) => {
  const { t } = useTranslation();
  const headerTitle = t('infantPostnatalCare', 'Infant Postnatal Care');

  const [motherName, setMotherName] = useState('--');

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        const firstResponse = await openmrsFetch(`/ws/fhir2/R4/Patient/${window.location.pathname.split('/')[4]}`).then(
          ({ data }) => {
            console.log(data);
            if (data.name?.length) {
              console.log(data.name[0].given.join(' ') + ' ' + data.name[0].family);
              return data.name[0].given.join(' ') + ' ' + data.name[0].family;
            }
            return '--';
          },
        );

        console.log(`values`, [firstResponse]);
        setMotherName(firstResponse);
      } catch (error) {
        return error;
      }
    };
    asyncFunction();
  });

  // const fetchMotherName = async () => {
  //   const response = await openmrsFetch(`/ws/fhir2/R4/Patient/${window.location.pathname.split('/')[4]}`);
  //   console.log(response);
  //   if (response.data) {
  //     console.log(response.data);
  //     setMotherName(response.data.name[0].given.join(' ') + ' ' + response.data.name[0].family);
  //     return response.data.name[0].given.join(' ') + ' ' + response.data.name[0].family;
  //   }
  // };

  const columns: EncounterListColumn[] = useMemo(
    () => [
      {
        key: 'pTrackerId',
        header: t('pTrackerId', 'Child PTracker ID'),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, pTrackerIdConcept);
        },
      },
      {
        key: 'childDateOfBirth',
        header: t('childDateOfBirth', 'Child Date of Birth'),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, ChildPDateOfBirth, true);
        },
      },
      {
        key: 'mothersName',
        header: t('mothersName', 'Mothers Name'),
        getValue: (encounter) => {
          return motherName;
        },
      },
      {
        key: 'artProphylaxisStatus',
        header: t('artProphylaxisStatus', 'ART Prophylaxis Status'),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, artProphylaxisStatus);
        },
      },
      {
        key: 'linkedToArt',
        header: t('linkedToArt', 'Linked to ART'),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, linkedToArt);
        },
      },
      {
        key: 'breastfeedingStatus',
        header: t('breastfeedingStatus', 'Breastfeeding status'),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, breastfeedingStatus);
        },
      },
      {
        key: 'outcomeStatus',
        header: t('outcomeStatus', 'Outcome Status'),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, outcomeStatus);
        },
      },
      {
        key: 'nextVisitDate',
        header: t('nextVisitDate', 'Next visit date'),
        getValue: (encounter) => {
          return getObsFromEncounter(encounter, nextVisitDate, true);
        },
      },
      {
        key: 'actions',
        header: t('actions', 'Actions'),
        getValue: (encounter) => [
          {
            form: { name: 'infant_postnatal', package: 'child_health' },
            encounterUuid: encounter.uuid,
            intent: '*',
            label: t('viewDetails', 'View Details'),
            mode: 'view',
          },
          {
            form: { name: 'infant_postnatal', package: 'child_health' },
            encounterUuid: encounter.uuid,
            intent: '*',
            label: t('editForm', 'Edit Form'),
            mode: 'edit',
          },
        ],
      },
    ],
    [],
  );

  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={infantPostnatalEncounterType}
      form={{ package: 'child_health', name: 'infant_postnatal' }}
      columns={columns}
      description={headerTitle}
      headerTitle={headerTitle}
      launchOptions={{
        displayText: t('add', 'Add'),
        moduleName: moduleName,
      }}
    />
  );
};

export default InfantPostnatalList;
