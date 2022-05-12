import React from "react";
import Statuscard from "./ststuscard";
import { Bug ,BugOff,User} from 'tabler-icons-react';
// import Sta
import './cardadjust.css'
import { useMediaQuery } from 'react-responsive'


const StatusAdjust=()=>{


    const isTabletOrMobile = useMediaQuery({
        query: '(min-width: 1624px)'
      })




return(
    <div className={`${isTabletOrMobile?'aa':'aa2'}`}>
    
    <Statuscard className="scan2"
    key='p1'
    icon={Bug}
    count={546}
    title='Total threat Found'
    colour='red'
    >

    </Statuscard>
    
    <Statuscard className="scan2"
    key='p2'

    icon={User}
    count={4}
    title='Device Connected'
    colour='blue'

    >

    </Statuscard>

    <Statuscard className="scan2"
    key='p3'

    icon={BugOff}
    count={300}
    title=' Total threat removed'
    colour='green'

    >

    </Statuscard>
    

    </div>
)
}

export default StatusAdjust;