import { useEffect, useState } from "react";

export default function Index() {
  const [cpuUsage, setcpuUsage] = useState("0");
  const [memTotal, setmemTotal] = useState("0");
  const [memFree, setmemFree] = useState("0");
  const [uptime, setuptime] = useState("0");
  const [temp1, settemp1] = useState("0");
  const [temp2, settemp2] = useState("0");

  useEffect(() => {
    setInterval(() => {
      setcpuUsage(global.api.snmpGet("1.3.6.1.4.1.2021.11.9.0"));

      setmemTotal(global.api.snmpGet("1.3.6.1.4.1.2021.4.5.0"));

      setmemFree(global.api.snmpGet("1.3.6.1.4.1.2021.4.6.0"));

      setuptime(global.api.snmpGet("1.3.6.1.2.1.1.3.0"));

      settemp1(global.api.snmpGet("1.3.6.1.4.1.26138.1.5.1.1.0"));

      settemp2(global.api.snmpGet("1.3.6.1.4.1.26138.1.5.1.2.0"));
    }, 3000);
  }, []);

  return (
    <div id="home">
      <div id="olt_wrap">
        <div id="olt">
          <div className="margin"></div>
          <div className="margin"></div>
          <div className="margin"></div>
          <div className="margin"></div>
          <div className="margin"></div>

          <div className="g1">
            <span>RS232</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>GER</span>
          </div>

          <div className="margin"></div>

          <div className="g1">
            <span>SFP+ 1</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>SFP+ 2</span>
          </div>

          <div className="margin"></div>

          <div className="g1">
            <span>2</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>1</span>
          </div>

          <div className="g1">
            <span>4</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>3</span>
          </div>

          <div className="margin2"></div>

          <div className="g1">
            <span>6</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>5</span>
          </div>

          <div className="g1">
            <span>8</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>7</span>
          </div>

          {/* SFP UPLINK */}
          <div className="margin"></div>

          <div className="g1">
            <span>2</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>1</span>
          </div>

          <div className="g1 ">
            <span>4</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>3</span>
          </div>

          <div className="margin2"></div>

          <div className="g1 ">
            <span>6</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>5</span>
          </div>

          <div className="g1 ">
            <span>8</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>7</span>
          </div>

          {/* SFP GPON */}
          <div className="margin"></div>

          <div className="g1 ">
            <span>2</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>1</span>
          </div>

          <div className="g1 ">
            <span>4</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>3</span>
          </div>

          <div className="margin2"></div>

          <div className="g1 ">
            <span>6</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>5</span>
          </div>

          <div className="g1 ">
            <span>8</span>
            <div className="ports">
              <div className="port" id="serial"></div>
              <div className="port" id="gerencia"></div>
            </div>
            <span>7</span>
          </div>
        </div>
      </div>

      <hr />

      <h3>Monitoramento Geral</h3>

      <span>cpuUsage: {cpuUsage}%</span>
      <br />
      <span>memTotal: {memTotal}</span>
      <br />
      <span>memFree: {memFree}</span>
      <br />
      <span>uptime: {uptime}</span>
      <br />
      <span>temp1: {temp1}</span>
      <br />
      <span>temp2: {temp2}</span>
      <br />
      <hr />

      {/* <div id="monitoramento_geral">
        <table>
          <tr>
            <td>Shelf</td>
            <td>Status</td>
          </tr>
          <tr>
            <td colSpan={2}>
              ----------------------------------------------------------
            </td>
          </tr>

          <tr>
            <td>Uptime</td>
            <td>95 days, 5 hours, 34 minutes</td>
          </tr>

          <tr>
            <td>Temperature Sensor</td>
            <td>Celsius(C)</td>
          </tr>

          <tr>
            <td colSpan={2}>
              ----------------------------------------------------------
            </td>
          </tr>

          <tr>
            <td>Sensor 1</td>
            <td>00.00</td>
          </tr>

          <tr>
            <td>Sensor 2</td>
            <td>00.00</td>
          </tr>

          <tr>
            <td colSpan={2}>
              ----------------------------------------------------------
            </td>
          </tr>
        </table>
      </div> */}
    </div>
  );
}
