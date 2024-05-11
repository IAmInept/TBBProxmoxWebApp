const url = import.meta.env.PROD
  ? "/api/"
  : "http://" + window.location.hostname + ":5000/api/";

/**
 *  found at `https://github.com/UrielCh/proxmox-api/blob/master/api/src/model.ts`
     * Returned by GET /nodes/\{node\}/qemu
     */
export interface nodesQemuVm {
  /**
   * Maximum usable CPUs.
   */
  cpus?: number;
  /**
   * The current config lock, if any.
   */
  lock?: string;
  /**
   * Root disk size in bytes.
   */
  maxdisk?: number;
  /**
   * Maximum memory in bytes.
   */
  maxmem?: number;
  /**
   * VM name.
   */
  name?: string;
  /**
   * PID of running qemu process.
   */
  pid?: number;
  /**
   * VM run state from the 'query-status' QMP monitor command.
   */
  qmpstatus?: string;
  /**
   * The currently running machine type (if running).
   */
  'running-machine'?: string;
  /**
   * The currently running QEMU version (if running).
   */
  'running-qemu'?: string;
  /**
   * QEMU process status.
   */
  status: string;
  /**
   * The current configured tags, if any
   */
  tags?: string;
  /**
   * Uptime.
   */
  uptime?: number;
  /**
   * The (unique) ID of the VM.
   */
  vmid: number;
  /**
   * additionalProperties
   */
  [additionalProperties: string]: any;
}

export async function get_data(): Promise<nodesQemuVm[]> {
  const response = await fetch(url + "proxmox");
  if (!response.ok) {
    let json = await response.json();
    console.log("Error:", json);
    throw new Error(json.message);
  }
  return response.json();
}
