import React, {useEffect, useState} from 'react';
import SideNav from '../inc/SideNav';
import { Helmet } from 'react-helmet';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { openUploadWidget } from "../utils/CloudinaryService";
import { CloudinaryContext } from 'cloudinary-react';

const AddProduct = () => {

  const initialState = {
    productInfo: {
      productName: '',
      regularPrice: '',
      salePrice: '',
      description: '',
    },
    images: []
  };

  const [product, setProduct] = useState([initialState]);

  useEffect(() => () => {
   
  }, []);

  const beginUpload = (tag) => {
    const uploadOptions = {
      cloudName: "ebaaba",
      tags: [tag],
      uploadPreset: "profile"
    };
  
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
        if(photos.event === 'success'){
          let path = photos.info.public_id;
        //   setSettings(Object.assign(settings,{ image : path }));
        //   console.log(settings);
        }
      } else {
        console.log(error);
      }
    });
  }

    return (
        <div>
            <Helmet>
                <title>Add Product | eBaaba Gambia</title>
            </Helmet>

            <div className="breadcrumb">
                <div className="breadcrumb-inner">
                    <h2>Add Product</h2>
                </div>
            </div>

            <div className="add-product">
                <div className="add-product-inner">
                    <div className="row">
                        <div className="col-md-4 left">
                            <div className="menu">
                                <SideNav />
                            </div>
                        </div>
                        <div className="col-md-8 right">
                            <h2>Product Information</h2>
                            <form>
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input type="text" placeholder="Product Name" className="form-control" />
                                </div>
                                <div className="form-group">
                                   <div className="row">
                                       <div className="col-md-6">
                                           <label>Regular Price (D)</label>
                                           <input type="text" placeholder="Regular Price" className="form-control"></input>
                                       </div>
                                       <div className="col-md-6">
                                            <label>Sale Price (D)</label>
                                            <input type="text" placeholder="Sale Price" className="form-control"></input>
                                       </div>
                                   </div>
                                </div>
                                <div className="form-group">
                                    <label>Product Description</label>
                                    {/* <textarea placeholder="Product Description" className="form-control" rows="5"></textarea> */}
                                    <CKEditor editor={ ClassicEditor }/>    
                                </div>
                                <div className="form-group">
                                    <select className="form-control">
                                        <label>Category</label>
                                        <option>Uncategorised</option>
                                        <option>Electronics</option>
                                        <option>Groceries</option>
                                        <option>Fashion</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Images</label>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <img src={require('../../media/b5.jpg')} width='100%'/>
                                      </div>
                                      <div className="col-md-3">
                                        <img src={require('../../media/b5.jpg')} width='100%'/>
                                      </div>
                                      <div className="col-md-3">
                                        <img src={require('../../media/b5.jpg')} width='100%'/>
                                      </div>
                                      <div className="col-md-3">
                                      <CloudinaryContext cloudName="ebaaba">
                                                             
                                       </CloudinaryContext>
                                      </div>
                                    </div>
                                </div>
                              
                                <input type="submit" value="Publish" className="btn btn-success" />
                            </form>
                            <button className="btn btn-warning" onClick={ () => beginUpload() } style={{ margin: '10px 0px'}}>Upload Images <i className="fa fa-upload"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
