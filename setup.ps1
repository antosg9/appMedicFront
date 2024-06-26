$FRONT_IMAGE = "app-medic-front"
$FRONT_CONTAINER = "app-medic-front"



function Setup-Front {
    npm install
}



function Build-Front {
    Setup-Front
    docker build -t $FRONT_IMAGE .
}



function Start-Front {
    docker run -d --name $FRONT_CONTAINER -p 443:443 $FRONT_IMAGE
}

function Start {
    Start-Front
}

function Stop {
    docker stop  $FRONT_CONTAINER -ErrorAction SilentlyContinue
    docker rm  $FRONT_CONTAINER -ErrorAction SilentlyContinue
}

function Pre-Commit {
    pre-commit run --all-files
}

function Clean {
    Stop
    docker rmi  $FRONT_IMAGE -ErrorAction SilentlyContinue
}

function All {
    Build-Front
}

param (
    [Parameter(Mandatory=$true)]
    [ValidateSet( "setup-front",  "build-front",  "start-front", "start", "stop", "pre-commit", "clean", "all")]
    [string]$task
)

switch ($task) {
    "setup-front" { Setup-Front }
    "build-front" { Build-Front }
    "start-front" { Start-Front }
    "start" { Start }
    "stop" { Stop }
    "pre-commit" { Pre-Commit }
    "clean" { Clean }
    "all" { All }
}
