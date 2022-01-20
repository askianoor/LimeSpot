// write your code here
var mainContainer = document.getElementsByClassName('main-container')[0];

var lsDialogs = document.getElementsByClassName('ls-dialog');

var lstOpenedDialogs = [];

[...lsDialogs].forEach(dialog => {
    dialog.dialog = function(action) {
        switch (action) {
            case 'open':
                dialog.classList.add('ls-dialog-open');             
                lstOpenedDialogs.push(dialog);
                dialog.style.zIndex = lstOpenedDialogs.length + 2;
                createBackDrop(dialog);
                break;
    
            case 'close':
                dialog.classList.remove('ls-dialog-open');
                removeBackDrop();
                break;
        
            default:
                break;
        }
    };
});


function createBackDrop(dialog) {
    var oldBackdropDivTag = document.getElementById('ls-backdrop');
    if(oldBackdropDivTag != null) {
        removeBackDrop();
    }

    var backdropDivTag = document.createElement('div');
    backdropDivTag.id = 'ls-backdrop'
    backdropDivTag.style.zIndex = lstOpenedDialogs.length + 1;
    backdropDivTag.setAttribute('onclick','closeLastDialog()');
    document.body.appendChild(backdropDivTag);
}

function removeBackDrop() {
    var backdropDivTag = document.getElementById('ls-backdrop');
    backdropDivTag.remove();
}

function closeLastDialog() {
    if(lstOpenedDialogs.length > 0) 
    {
        var lastDialog = lstOpenedDialogs.pop();
        lastDialog.dialog('close');

        if(lstOpenedDialogs.length > 0 ) {
            createBackDrop(lstOpenedDialogs[lstOpenedDialogs.length-1]);
        }
    }
}

lsPopovers = document.getElementsByClassName('ls-popover');

[...lsPopovers].forEach(popover => {
    popover.popover = function(action) {
        switch (action) {
            case 'open':
                popover.classList.add('ls-popover-open');
                createPopoverArrow(popover);
                break;
        
            case 'close':
                popover.classList.remove('ls-popover-open');
                break;

            default:
                break;
            }
    };
});


function createPopoverArrow(popover) {
    var arrow = document.createElement('div');
    arrow.className = 'ls-popover-arrow';
    popover.appendChild(arrow);
}
