function getprojectinfo(name) {
    $('#project-modal-label').html('Loading ' + name + '…');
    $('#project-modal .modal-body').addClass('hide');
    $('#project-modal').modal();

    r = Math.random();
    jQuery.getJSON('/projects/projects.json?r=' + r, function(data) {
        pdata = data[name]
        $('#project-modal-label').html(pdata['name']);
        $('#project-modal-desc').html(pdata['description']);
        $('#project-modal-status').html(project_status(pdata['status']));
        $('#project-modal-gh').html('<a href="https://github.com/Kwpolska/' + pdata['gh'] + '">Kwpolska/' + pdata['gh'] + '</a>');
        $('#project-modal-git').html('<input style="width: 99%; margin: 0;" type="text" readonly="readonly" value="https://github.com/Kwpolska/' + pdata['gh'] + '.git">');
        $('#project-modal-zip').html('<a href="https://github.com/Kwpolska/' + pdata['gh'] + '/archive/master.zip">Kwpolska/' + pdata['gh'] + '@master.zip</a>');
        if (pdata['license'] == '3BSD') {
            $('#project-modal-license').html('<a href="#" onclick="$(\'#bsd3c\').toggle(250, \'linear\');">3-clause BSD</a> <div id="bsd3c" class="hide"><h2>The 3-clause BSD license</h2><p>Copyright © YEAR, Kwpolska.<br> All rights reserved.</p> <p>Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:</p> <ol> <li> Redistributions of source code must retain the above copyright notice, this list of conditions, and the following disclaimer. </li> <li> Redistributions in binary form must reproduce the above copyright notice, this list of conditions, and the following disclaimer in the documentation and/or other materials provided with the distribution. </li> <li> Neither the name of the author of this software nor the names of contributors to this software may be used to endorse or promote products derived from this software without specific prior written consent. </li> </ol> <p>THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p></div>');
        } else {
            $('#project-modal-license').html(pdata['license']);
        }
        switch (pdata['docs']) {
            case 'rtd':
                $('#project-modal-docs').html('<a href="http://' + pdata['gh'] + '.rtfd.org/">Hosted on Read The Docs</a>');
                break;
            case 'here':
                $('#project-modal-docs').html('<a href="/projects/' + pdata['gh'] + '.html">Hosted here (project page)</a>');
                break;
            default:
                $('#project-modal-docs').html(pdata['docs']);
        }
        $('#project-modal .modal-body').removeClass('hide');
    });
}

function project_status(code) {
    switch (code) {
        case '0':
            return '<span class="badge badge-inverse">Draft</span>';
            break;
        case '1':
            return '<span class="badge badge-important">Work in Progress</span>';
            break;
        case '2':
            return '<span class="badge badge-warning">Work in Progress</span>';
            break;
        case '3':
            return '<span class="badge badge-info">Almost done</span>';
            break;
        case '4':
            return '<span class="badge badge-success">Done</span>';
            break;
        case '5':
            return '<span class="badge badge-success">Production Ready</span>';
            break;
        case '-1':
            return '<span class="badge">Abandoned</span>';
            break;
        default:
            return '<span class="badge">' + code + '</span>';
            break;
    }
}
