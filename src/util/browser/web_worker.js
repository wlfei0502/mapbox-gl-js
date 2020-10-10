// @flow

import window from '../window';
import mapboxgl from '../../';
import { getCrs } from '../../geo/mercator_coordinate';

import type {WorkerInterface} from '../web_worker';

export default function (): WorkerInterface {
    const worker = (new window.Worker(mapboxgl.workerUrl): any);
    mapboxgl.workers = mapboxgl.workers || [];
    mapboxgl.workers.push(worker);
    worker.postMessage({
        crs: getCrs()
    });
    return worker;
}
