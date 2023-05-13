import React from 'react'
import Tabeluser from '../../../components/adminpage/formuser/tabeluser'
import Layout from '../../../components/adminpage/utils/layout'
import {useEffect} from 'react'
import {getCookie, validateToken} from '../../../libs/cookie.lib'

export default function Index() {
  useEffect(() => {
  if(getCookie('token') === "" && getCookie("username") === ""){
    window.location.href = "/login";
  }else{
    validateToken(getCookie('token')) ? null : window.location.href = "/login";
  }
}, [])
  return (
    <div>
        <Layout>
            <Tabeluser />
        </Layout>
    </div>
  )
}
