
   
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Accounts | Basic Banking System</title>
    <link rel="stylesheet"
        href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css">
    <link rel="stylesheet" href="assets/css/customer.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/7b627b5974.js"></script>
</head>

<body>

     <!--Navbar Starts Here-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-right">
    <div class="container-fluid">
      <a class="navbar-brand" href="./index.html">Sparks Foundation Bank(SFB)</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav navbar-nav navbar-right ml-auto">
          <li>
            <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./transfer.html">Transfer Money</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- navbar ends here  -->
 <br>
 <br>
<section>
    <div class="my-info text-center">
        <h2>Name: Anupam Saini</h2>
        <h4>Net Bank Balance: $<span id="myAccountBalance">10000</span></h4>

        <button class="btn btn-primary btn-info btn-lg" data-toggle="modal" data-target="#sendMoney">Send Money</button>
        <a class="btn btn-primary btn-info btn-lg" href="" data-toggle="modal" data-target="#transactionHistory">Customers account balance</a>
    </div>
</section>
    <!-- Modal send money -->
    <div class="modal fade" id="sendMoney" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Send Money</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="">
                        <div class="input-group mb-3">
                            <input type="text" id="enterName" class="form-control" placeholder="Recipient's username"
                                aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <span class="input-group-text" id="basic-addon2">@email.com</span>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="text" id="enterAmount" class="form-control" placeholder=" Enter Amount"
                                aria-label="Amount (to the nearest dollar)">
                            <div class="input-group-append">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" onclick="sendMoney()" class="btn btn-success" data-dismiss="modal">Send
                        Money</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal send money ends here-->

    
    <!-- Modal transaction History-->
    <div class="modal fade" id="transactionHistory" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Transaction History</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ol id="transaction-history-body">

                    </ol>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- table  -->
    <div class="container">
        <div class="table-responsive">
            <table class="table table-hover table-bordered">
                <thead>
                    <tr class="table-danger">
                        <th scope="col">Sl. No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Bank Balance(in Rs)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-light">
                        <td scope="row">1</td>
                        <td>vikas kumar</td>
                        <td>vk234@email.com</td>
                        <td>
                            <p id="vikasBankBalance">454575</p>
                        </td>
                    </tr>
                    <tr class="table-info">
                        <td scope="row">2</td>
                        <td>Naina upadhyay</td>
                        <td>nanu111@email.com</td>
                        <td>
                            <p id="nainaBankBalance">24000</p>
                        </td>
                    </tr>
                    <tr class="table-light">
                        <td scope="row">3</td>
                        <td>pratima singh</td>
                        <td>pratimapq1@email.com</td>
                        <td>
                            <p id="pratimaBankBalance">34621133</p>
                        </td>
                    </tr>
                    <tr class="table-info">
                        <td scope="row">4</td>
                        <td>anjali saini</td>
                        <td>anjali@email.com</td>
                        <td>
                            <p id="anjaliBankBalance">40030</p>
                        </td>
                    </tr>
                    <tr class="table-light">
                        <td scope="row">5</td>
                        <td>palak gupta</td>
                        <td>palak@email.com</td>
                        <td>
                            <p id="palakBankBalance">630600</p>
                        </td>
                    </tr>
                    <tr class="table-info">
                        <td scope="row">6</td>
                        <td>neeraj kumar</td>
                        <td>neer345@email.com</td>
                        <td>
                            <p id="neerajBankBalance">10035630</p>
                        </td>
                    </tr>
                    <tr class="table-light">
                        <td>7</td>
                        <td>akansha sinha</td>
                        <td>sinha345@email.com</td>
                        <td>
                            <p id="ankanshaBankBalance">5600</p>
                        </td>
                    </tr>
                    <tr class="table-info">
                        <td scope="row">8</td>
                        <td>ajay kumar</td>
                        <td>ajay567@email.com</td>
                        <td>
                            <p id="ajayBankBalance">356353</p>
                        </td>
                    </tr>
                    <tr class="table-light">
                        <td scope="row">9</td>
                        <td>ankit kumar</td>
                        <td>ankit56@email.com</td>
                        <td>
                            <p id="ankitBankBalance">853400</p>
                        </td>
                    </tr>
                    <tr class="table-info">
                        <td scope="row">10</td>
                        <td>sneha singh</td>
                        <td>sneha@email.com</td>
                        <td>
                            <p id="snehaBankBalance">135330</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Footer -->
  
    <script src="assets/js/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js"></script>
    <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js"></script>

    <footer class="bg-light text-center text-lg-start">
        <!-- Grid container -->
        
        <!-- Copyright -->
        <footer id="footer"style="margin-top: 300px; background-color: rgba(214,230,255)">
            <a href="https://www.linkedin.com/in/anupam-saini-72667218b"><i class="fab fa-linkedin fa-2x fb1 fb"></i></a>
            <a href="https://www.facebook.com/anupam.saini.10"><i class="fab fa-facebook-f fa-2x fb2 fb"></i></a>
            <a href="https://github.com/anupam1806/Web-development"><i class="fab fa-github fa-2x fb5 fb"></i></a>
            <a href="https://www.instagram.com/anupam.1806"><i class="fab fa-instagram fa-2x fb3 fb"></i></a>
            <a href="mailto:anupam.saini18@gmail.com"><i class="fas fa-envelope fa-2x fb4 fb"></i></a>
            <p>© Copyright 2021 Anupam</p>
          </footer>
        <!-- Copyright -->
      </footer>
</body>

</html>
