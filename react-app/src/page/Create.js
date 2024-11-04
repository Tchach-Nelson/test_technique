import React, { useState, useEffect } from 'react';

function Create() {
   

    return (
       <div>
    <div class="bg-dark py-3">
        <h3 class="text-white text-center">Simple laravel CRUD</h3>
    </div>
    <div class="container">
        <div class="row d-flex justify-content-center mt-4">
            <div class="col-md-10 d-flex justify-content-end">
                <a href="/" class="btn btn-dark">Back</a>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col-md-10">
                <div class="card borde-0 shadow-lg my-3">
                    <div class="card-header bg-dark">
                        <h3 class="text-white">Create Product</h3>
                    </div>
                    <form enctype="multipart/form-data" action="" method="post">
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="" class="form-label h5">Titre</label>
                                <input value="" type="text" class="form-control form-control-lg" placeholder="Titre" name="name" />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label h5">created_at</label>
                                <input value="" type="text" class="form-control form-control-lg" placeholder="created_at" name="sku" />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label h5">due_date</label>
                                <input value="" type="number" class="form-control form-control-lg" placeholder="due_date" name="price" />
                            </div>
                            <div class="mb-3">
                                <label for="" class="form-label h5">Description</label>
                                <textarea class="form-control" name="Description" cols="20" rows="3" placeholder="Description"></textarea>
                            </div>
                            <div class="d-grid">
                                <button class="btn btn-lg btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
       </div>
    );
}

export default Create;
