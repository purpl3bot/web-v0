'use client'

import { useState } from 'react'
import Layout from '../../components/Layout'
import Pdf from '@/public'

    <Layout>
      <div>
        <iframe src={Pdf} width="100%" height="600px" style={{ border: 'none' }}></iframe>  
        /* <!-- <iframe src={pdfUrl} width="100%" height="600px" style={{ border: 'none' }}></iframe> --> */ 
        /*  <embed src="Pdf" width="800px" height="2100px" /> */ 
      </div>
    </Layout>

