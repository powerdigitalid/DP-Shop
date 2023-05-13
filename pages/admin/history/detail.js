import React from 'react'
import Detailhistory from '../../../components/adminpage/history/detailhistory'
import Layout from '../../../components/adminpage/utils/layout'
import {useEffect} from 'react'
import {getCookie, validateToken} from '../../../libs/cookie.lib'

export default function detail() {
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
            <Detailhistory />
        </Layout>
    </div>
  )
}
