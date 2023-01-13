import React,{useState} from 'react'
import {storage,db} from '../config/Config'

const AddProducts = () => {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const [productImage, setProductImage] = useState(null)
    const [error, setError] = useState('')

    const types = ['image/png', 'image/jpeg']

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0]
        if(selectedFile && types.includes(selectedFile.type)) {
            setProductImage(selectedFile)
            setError('')
        }
        else {
            setProductImage(null)
            setError('Please select a valid image type png or jpeg')
        }
    }

    const addProduct = (e) =>{
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImage.name}`).put(productImage);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImage.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        ProductPrice: Number(productPrice),
                        ProductImage: url
                    }).then(() => {
                        setProductName('');
                        setProductPrice(0)
                        setProductImage('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
        }

  return (
    <div className='container'>
        <br />
        <h2 className='text-3xl bold'>ADD PRODUCTS</h2>
        <hr />
        <form autoComplete='off' className='form-group' onSubmit={addProduct}>
            <label htmlFor="prouct-name">Product Name</label>
            <br />
            <input type="text" name="" id="" className='form-control' required 
            onChange={(e)=>setProductName(e.target.value)} value={productName}
            />
            <br />
            <label htmlFor="product-price" >Product Price</label>
            <br />
            <input type="number" name="" id="" className='form-control' required
                onChange={(e)=>setProductPrice(e.target.value)} value={productPrice}

            />
            
            <br />
            <label htmlFor="product-img">Product Image</label>
            <br />
            <input type="file" name="" id="file" className='form-control'
                onChange={productImgHandler}
            />
            <br />
            <button className='btn btn-success btn-md mybtn'>ADD</button>
        </form>
        {error && <span className='error-msg'>{error}</span>}
    </div>
  )
}

export default AddProducts