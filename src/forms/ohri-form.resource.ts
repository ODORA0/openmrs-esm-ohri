import { openmrsFetch, openmrsObservableFetch } from '@openmrs/esm-framework';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { encounterRepresentation } from './constants';

export function saveEncounter(abortController: AbortController, payload, encounterUuid?: string) {
  let url = '/ws/rest/v1/encounter';
  if (encounterUuid) {
    url = url + `/${encounterUuid}`;
  }
  return openmrsFetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: payload,
    signal: abortController.signal,
  });
}

export function getConcept(conceptUuid: string, v: string): Observable<any> {
  return openmrsObservableFetch(`/ws/rest/v1/concept/${conceptUuid}?v=${v}`).pipe(map(response => response['data']));
}

export function getLocationsByTag(tag: string): Observable<{ uuid: string; display: string }[]> {
  return openmrsObservableFetch(`/ws/rest/v1/location?tag=${tag}&v=custom:(uuid,display)`).pipe(
    map(({ data }) => data['results']),
  );
}

export function getPreviousEncounter(patientUuid: string, encounterType) {
  const query = `encounterType=${encounterType}&patient=${patientUuid}`;
  return openmrsFetch(`/ws/rest/v1/encounter?${query}&v=${encounterRepresentation}`).then(({ data }) => {
    if (data.results.length) {
      return data.results[data.results.length - 1];
    }
    return null;
  });
}
