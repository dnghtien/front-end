import React from 'react';

function NetworkSpeed(){

    const onConnectionChange = () =>{
        const {
            rtt,
            downlink,
            effectiveType,
            saveData
        } = navigator.connection
     
        console.log(`Effective network connection type: ${effectiveType}`)
        console.log(`Downlink Speed/bandwidth estimate: ${downlink}Mb/s`)
        console.log(`Round-trip time estimate: ${rtt}ms`)
        console.log(`Data-saver mode on/requested: ${saveData}`)
    }
     
    navigator.connection.addEventListener('change', onConnectionChange)
    }

    if (/\slow-2g|2g|3g/.test(navigator.connection.effectiveType)) {
        this.connection = "slow";
      } else {
        this.connection = "fast";
      }

    return(
        <div className='NetworkSpeed'>
            <div class="modal" tabindex="-1" role="dialog" id='networkSP'>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-danger" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NetworkSpeed;