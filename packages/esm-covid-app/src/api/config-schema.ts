import { Type } from '@openmrs/esm-framework';

export const configSchema = {
  identifiers: {
    _type: Type.Object,
    _description: 'Identifier sources',
    _default: {
      preferredIdentifierSource: '8549f706-7e85-4c1d-9424-217d50a2988b',
    },
  },
  encounterTypes: {
    _type: Type.Object,
    _description: 'Encounter type UUIDs for TB.',
    _default: {
      covid_Assessment_EncounterUUID: '253a43d3-c99e-415c-8b78-ee7d4d3c1d54',
      covidLabOrderEncounterType_UUID: 'a77d3e7f-5c8f-4074-a207-77a70e197b0c',
      covidSampleCollection: '3ee00481-50e1-41c3-bfcb-7e6d6a8722fb',
      covidVaccinationEncounterUUID: '5b37ce7a-c55e-4226-bdc8-5af04025a6de',
    },
  },
  obsConcepts: {
    _type: Type.Object,
    _description: 'List of observation concept UUIDs related to TB.',
    _default: {
      returnVisitDateConcept: '5096AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', // Next Appointment Date
      dateSpecimenCollected: '159951AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', // covidSpecimenCollectiDate_UUID, covidSpecimenCollectionDate_UUID
      covidTestTypeUUID: '069f6dfe-88c1-4a45-a894-0d99549c8718',
      covidSpecimenCollectiDate_UUID: '159951AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      covidTypeofTestConcept_UUID: '069f6dfe-88c1-4a45-a894-0d99549c8718',
      covidSpecimenCollectionDate_UUID: '159951AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      covidOutcomeUUID: 'a845f3e6-4432-4de4-9fff-37fa270b1a06',
      covidTestType: '069f6dfe-88c1-4a45-a894-0d99549c8718', // covidTestTypeUUID, covidTypeofTestConcept_UUID
      covidOutcome: 'a845f3e6-4432-4de4-9fff-37fa270b1a06', // covidOutcomeUUID, covidTreatementOutConcept_UUID
      rapidAntigenResultDate: 'af159c77-bc5d-46dd-90d9-bcbffb22267f', // covidRapidTestResultDate_UUID
      covidTreatementOutConcept_UUID: 'a845f3e6-4432-4de4-9fff-37fa270b1a06',
      covidRapidTestResultDate_UUID: 'af159c77-bc5d-46dd-90d9-bcbffb22267f',
      pcrTestResultDate: '4a77ab44-0323-490e-96be-e168c0e5c9de', // covidDiagnorticPcrResultDate_UUID
      finalCovid19Result: '5da5c21b-969f-41bd-9091-e40d4c707544',
      covidOutcomesCohortUUID: 'afb0d950-48fd-44d7-ae2c-79615cd125f0',
      covidDiagnorticPcrResultDate_UUID: '4a77ab44-0323-490e-96be-e168c0e5c9de',
      htsRetrospectiveEncounterType: '79c1f50f-f77d-42e2-ad2a-d29304dde2fe', // htsRetrospectiveType
      htsRetrospectiveType: '79c1f50f-f77d-42e2-ad2a-d29304dde2fe',
      pcrTestResult: '3f4ee14b-b4ab-4597-9fe9-406883b63d76',
      covidReasonsForTestingConcep_UUID: 'ae46f4b1-c15d-4bba-ab41-b9157b82b0ce',
      covidDiagnosticPcrResult_UUID: '3f4ee14b-b4ab-4597-9fe9-406883b63d76',
      covidTestResultUUID: '3f4ee14b-b4ab-4597-9fe9-406883b63d76', // pcrTestResult, covidDiagnosticPcrResult_UUID
      covidPatientStatusUUID: 'de3bc9b7-05b5-41b6-a38d-8d2eec646c4f', // covidPatientStatusConcept_UUID, covidSymptomsPresentation, covidVaccinationStatusConcept_UUID
      covidSARS_TestResultConcept_UUID: '89feed9c-1dd9-477a-ab1c-86f5f75f6762',
      covidSARS_TestResult_Name_UUID: '0961651c-d52e-41dd-957a-94b9ce08e4eb',
      covidReasonsForTestingUUID: '5793ad0f-d726-4918-a1b5-f25f4fb2b857',
      covidPatientStatusConcept_UUID: 'de3bc9b7-05b5-41b6-a38d-8d2eec646c4f',
      covidTreatmenOutConceptName_UUID: '28d43e48-3673-4671-a6b1-3ed45fdfcba6',
      covidSpecimentTestDate_UUID: '499df97a-2a34-4562-946a-3c4d5608b67f',
      covidPresentSymptonsConcept_UUID: '244b0dc0-eb1b-46ae-b62a-f580345d4f46',
      covidSymptomsPresentation: 'de3bc9b7-05b5-41b6-a38d-8d2eec646c4f',
      covidComorbidityPresentConcept_UUID: '166020AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      covidUnderComorbidityConcept_UUID: '0651869c-6e90-48d6-b25c-406270c76bee',
      covidVaccinationStatusConcept_UUID: 'de3bc9b7-05b5-41b6-a38d-8d2eec646c4f',
      covidPresentSymptonsName_UUID: '12568215-ae1c-42ec-b7e8-8818d2761f46',
      covidEncounterDateTime_UUID: '160753AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      covidLabOrderDate_UUID: '162078AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      rapidTestResult: 'cbcbb029-f11f-4437-9d53-1d0f0a170433',
      covidSpecimentTypeConcept_UUID: 'ae127f82-1861-4165-ac81-8554e5a3aac4',
      covidTestResultConcept_UUID: '161934AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      covidTestStatusConcept_UUID: '6681366c-2174-489a-b951-13a1404935bf',
      covidTestResultDate_UUID: '163724AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      covidVaccinationStatusUUID: '40cb816f-797b-4cb4-a9fb-2727b2373623',
      covidVaccination1stDoseDateConcept_UUID: 'c85eb064-5ef7-4ac6-8e56-4749bd58df44',
      covidVaccination2ndDoseDateConcept_UUID: '42ee7f5c-fdd3-48c1-8d3a-5c6e248e6cb9',
      covidVaccinationTypeConcept_UUID: 'a31d1148-bbcc-4ad6-a015-8359d66bcfdc',
      covidVaccinationAdministeredConcept_UUID: '1410AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      covidVaccinationNextVacinationDateConcept_UUID: '5096AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
      covidVaccinationDose_UUID: '6ec64cb3-e710-4d3e-9db4-38c135966a45',
      covidVaccineAdministeredConcept_UUID: 'e41fbe17-4aee-4a44-950b-6676d6e0ede2',
      covidVaccineConcept_UUID: '0cc868bd-e9dd-4b59-b278-f923afe22d82',
      covidVaccineSeriesConcept_UUID: '45b3959d-f897-4e01-b6e5-16ef6ae0a687',
    },
  },
  cohorts: {
    _type: Type.Object,
    _description: 'TB Cohort uuid.',
    _default: {
      clientsEnrolledForTb: '98fd11ba-cb4d-46f7-9b82-40d49949c7ef',
      covidOutcomesCohortUUID: 'afb0d950-48fd-44d7-ae2c-79615cd125f0',
      covid19PositiveClients: '1523b1e5-b6d0-44fb-bd9e-c91bfefb4d1c',
      clientsAssessedForCovid: 'ec373b01-4ba3-488e-a322-9dd6a50cfdf7', // allCovidAssessments
      covidClientsWithPendingLabResults: '166aa2b1-ce55-4d16-9643-ca9d2e2694ea',
      clientsWithoutCovidOutcomes: 'db6c4a18-28c6-423c-9da0-58d19e364a7f',
      allCovidAssessments: 'ec373b01-4ba3-488e-a322-9dd6a50cfdf7',
      covidVaccinatedClients: 'b5d52da9-10c2-43af-ae23-552acc5e445b',
    },
  },
};

export interface ConfigObject {
  identifiers: Object;
  encounterTypes: Object;
  obsConcepts: Object;
}
