<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jeux en JS</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script type="module" src="index.js" defer></script>
</head>

<body>
    <div class="container-fluid">
        <div class="container">
            <h2 class="text-muted mb-4">Jouez ! ça detend 😃</h2>
            <div class="row">
                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Code binaire</h4>
                            <p class="card-text">Ex: 10 => 1010</p>
                            <p class="card-text">Ex: 3 => 11</p>
                            <div class="input-group mb-3">
                                <input type="number" id='inputBinaire' class="form-control" placeholder="Un entier positif" aria-label="Button" aria-describedby="">
                            </div>
                            <div class="bg-dark p-3 text-white rounded">
                                <p class="resultBinaire">resultat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Palindrone</h4>
                            <p class="card-text">Ex radar => radar</p>
                            <p class="card-text">Ex ici => ici</p>
                            <div class="mb-3">
                                <input type="text" id='inputPalindrone' class="form-control" placeholder="Saisir un text" aria-label="Button" aria-describedby="">
                            </div>
                            <div class="bg-dark p-3 text-white rounded">
                                <p class="resultPalindrone">resultat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Credit card hide</h4>
                            <p class="card-text">EX ####1234</p>
                            <p class="card-text">EX #######1234</p>
                            <div class="mb-3">
                                <input type="text" id='inputCard' class="form-control" placeholder="Saisir la carte" aria-label="Button" aria-describedby="">
                            </div>
                            <div class="bg-dark p-3 text-white rounded">
                                <p class="resultCard">resultat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Reverse Text</h4>
                            <p class="card-text">Ex: Hello => olleH</p>
                            <p class="card-text">Ex: text => txet</p>
                            <div class="input-group mb-3">
                                <input type="text" id='inputReverse' class="form-control" placeholder="Saisir un text" aria-label="Button" aria-describedby="">
                            </div>
                            <div class="bg-dark p-3 text-white rounded">
                                <p class="resultReverse">resultat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Number digit</h4>
                            <p class="card-text">Ex: 123 => 3 </p>
                            <p class="card-text">Ex: 1000 => 4</p>
                            <div class="input-group mb-3">
                                <input type="number" id='inputDigit' class="form-control" placeholder="Saisir un text" aria-label="Button" aria-describedby="">
                            </div>
                            <div class="bg-dark p-3 text-white rounded">
                                <p class="resultDigit">resultat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid mt-3">
            <p class="p-4 rounded text-center bg-dark text-white">&congdot; Amounan Honoré - amounahonore@gmail.com &congdot;</p>
        </div>
    </div>
</body>

</html>