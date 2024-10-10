import "./Photo.css"

import { uploads } from "../../utils/config.jsx"

//components
import Message from "../../components/Message.jsx"
import { Link } from "react-router-dom"
import PhotoItem from "../../components/PhotoItem.jsx"

//hooks
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

//redux
import { getPhoto } from "../../slices/photoSlice.jsx"

const Photo = () => {
  const {id} = useParams()

  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {photo, loading, error, message} = useSelector((state) => state.photo)

  //coments

  //load Phoot data
  useEffect(() => {
    dispatch(getPhoto(id))
  }, [dispatch, id])

  //like e coments

  if(loading) {
    return <p>Carregando...</p>
  }


  return (
    <div id="photo">
      <PhotoItem photo={photo}/>
    </div>
  )
}

export default Photo