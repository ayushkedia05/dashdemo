import React, { useEffect, useState } from "react";

import { RingProgress,Text} from "@mantine/core";
import { ReportSearch } from "tabler-icons-react";
import './scan.css'
const Scan=()=>{

   const [scanwork,setscan]=useState(1);
  //  const [counterin,setcounter]=useState(0);

  //  useEffect(()=>{

  //   if(counterin===100)
  //   return;
  //    const Interval=setInterval(()=>{
  //       setcounter((prevcounter)=>prevcounter+1);
  //    },2000);

  //    return()=>clearInterval(Interval);
  //  },[counterin]);
    
   const initiatescan=()=>{
     setscan(!scanwork);
   }


  return (
    <div className="dualcard">
      <div className="scan">
            <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text color="blue" weight={700} align="center" size="xl">
            20%
          </Text>
        }
      />
     
       <ReportSearch size={60}
    strokeWidth={2}
    color={'white'} />
     <div className="content">
   {scanwork && <span className="runtext">Run Scan</span>}
   {!scanwork && <span className="runtext">Scan Running</span>}


{scanwork && <button className="runbtn" onClick={initiatescan} >Click to run scan</button>}
{!scanwork && <button className="runbtn" onClick={initiatescan} >Click to stop scan</button>}

     </div>



      </div>

      <div className="scan">
      <RingProgress
sections={[
  { value: 40, color: '#68b5e8' },
  { value: 15, color: '#6888e8' },
  { value: 15, color: '#8468e8' },
]}

label={
  <Text color="blue" weight={700} align="center" size="xl">
    {70}%
  </Text>
}
// <Text color="blue" weight={700} align="center" size="xl"></Text>

/>
     
       <ReportSearch size={60}
    strokeWidth={2}
    color={'white'} />
     <div className="content">
    <span className="runtext">Profile</span>

<button className="runbtn">Complete profile</button>


     </div>

      </div>

      </div>
  )
};

export default Scan; 




