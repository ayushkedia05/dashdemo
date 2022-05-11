import React from "react";
import Statuscard from "./ststuscard";
import { Bug ,BugOff,User} from 'tabler-icons-react';
// import Sta




const StatusAdjust=()=>{







return(
    <div className="aa">
    <Statuscard
    key='p1'
    icon={Bug}
    count={546}
    title='Total threat Found'
    colour='red'
    >

    </Statuscard>

    <Statuscard
    key='p2'

    icon={User}
    count={4}
    title='Device Connected'
    colour='blue'

    >

    </Statuscard>

    <Statuscard
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