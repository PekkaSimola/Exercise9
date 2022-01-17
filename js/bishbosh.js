'use strict';

// Link settings in lots of 3: linkname, textbox, std-value
const linkClicks = ['bishLink', 'bish', '3', 'bishLink2', 'bish', '3'
                  , 'boshLink', 'bosh', '4', 'boshLink2', 'bosh', '4'
                  , 'endValueLink', 'endValue', '100'];

// Link events; auto-activate the correct text-box; missing values are replaced by std-values
(function () {
    let o;
    for (let i = 0; i < linkClicks.length; i += 3){
        document.getElementById(linkClicks[i]).addEventListener('click',
            function ()
            {
                o = document.getElementById(linkClicks[i + 1]);
                o.focus();  // sets marker into the box
                o.select(); // selects available content
                if (!o.checkValidity() || o.value.length == 0)
                    o.value = linkClicks[i + 2]; // standard value to empty or erroric text-box
            }
        , false)
    }
})()

function calcBishBash(){

    // these values are validated
    const bish = document.getElementById("bish").value;
    const bosh = document.getElementById("bosh").value;
    const endValue = document.getElementById("endValue").value;

    let iBish;
    let iBosh;
    let bB = [];

    for (let i = 1; i <= endValue; i++){
        iBish = i % bish;
        iBosh = i % bosh;
        if((iBish + iBosh) == 0){
            bB.push('Bish-Bosh');
        } else if (iBish == 0){
            bB.push('Bish');
        } else if (iBosh == 0){
            bB.push('Bosh');
        } else {
            bB.push(i.toString());
        }
    }
    let p = document.getElementById("result")
    p.innerText = bB.join(', ');
    p.focus(); // anything but the btn
    
}

// Validation of form-textboxes triggered by btnBishBosh-click
(function () {
    var forms = document.querySelectorAll('.needs-validation') 

    Array.prototype.slice.call(forms).forEach(function (form)
    {
        form.addEventListener('submit', function (event)
        {
            if (!form.checkValidity())
            {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated')
        }
        , false)
    })
})()