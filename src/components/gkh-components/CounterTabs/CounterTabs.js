import * as resourceTypes from "services/resourceTypes"
import classnames, {bind} from 'classnames/bind'
import React from 'react';

export const CounterTabs = ({ counters, counterResourceType, activeCounterNum, setActiveCounterNum }) =>  {
   return (
        <div style={{marginTop: 15}} className='gkhTabs'>
        {
            Object.keys(counters).map( counterSnNum => {
                const counter = counters[counterSnNum]
                return (
                    <div
                    key={ counterSnNum }
                    className={classnames('tab ' + resourceTypes.getEngTrans(counter[counterResourceType]), { active: counterSnNum === activeCounterNum })}
                    onClick={ () => setActiveCounterNum(counterSnNum) }
                    >
                        <div className='icon' />
                        <div className='text' >
                        Счетчик №{ counterSnNum }
                        </div>
                    </div>
                )
            })
        }
        </div>
     )}