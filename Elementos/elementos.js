
var videoActual;
var id;

function cargarVideoHtml()
{
    
    if (id==undefined)
    {
        var video = document.getElementById('html');
        id = video.id;
        video.id = "video-activo";
    }
    else
    {
        if (id != 'html')
        {
            var video = document.getElementById('html');
            document.getElementById('video-activo').id = id;
        
            if(video!=null)
            {
                id=video.id;
                video.id ="video-activo";
            }
        }

    }

    
}

function cargarVideoCss()
{
    

    if (id==undefined)
    {
        var video = document.getElementById('css');
        id = video.id;
        video.id = "video-activo";
    }
    else
    {
        if (id != 'css')
        {
            var video = document.getElementById('css');
            document.getElementById('video-activo').id = id;
        
            if(video!=null)
            {
                id=video.id;
                video.id ="video-activo";
            }
        }

    }

    
}

function cargarVideoJs()
{
    

    if (id==undefined)
    {
        var video = document.getElementById('js');
        id = video.id;
        video.id = "video-activo";
    }
    else
    {
        if (id != 'js')
        {
            var video = document.getElementById('js');
            document.getElementById('video-activo').id = id;
        
            if(video!=null)
            {
                id=video.id;
                video.id ="video-activo";
            }
        }

    }

    
}

function cargarVideoFire()
{
    

    if (id==undefined)
    {
        var video = document.getElementById('firefox');
        id = video.id;
        video.id = "video-activo";
    }
    else
    {
        if (id != 'firefox')
        {
            var video = document.getElementById('firefox');
            document.getElementById('video-activo').id = id;
        
            if(video!=null)
            {
                id=video.id;
                video.id ="video-activo";
            }
        }

    }

    
}

function cargarVideoDev()
{

    if (id==undefined)
    {
        var video = document.getElementById('chrome');
        id = video.id;
        video.id = "video-activo";
    }
    else
    {
        if (id != 'chrome')
        {
            var video = document.getElementById('chrome');
            document.getElementById('video-activo').id = id;
        
            if(video!=null)
            {
                id=video.id;
                video.id ="video-activo";
            }
        }

    }

    
}