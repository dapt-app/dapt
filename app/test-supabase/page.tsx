'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Page() {
  const [msg, setMsg] = useState('Loading...')

  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase
        .from('leagues')
        .select('*')
        .limit(1)

      if (error) setMsg('ERROR: ' + error.message)
      else setMsg('Connected ✅ Rows: ' + data?.length)
    }

    test()
  }, [])

  return <div style={{ padding: 40 }}>{msg}</div>
}