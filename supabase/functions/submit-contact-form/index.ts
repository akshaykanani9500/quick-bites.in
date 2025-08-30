import { serve } from "https://deno.land/std@0.208.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, mobile, email, message } = await req.json()
    
    // Google Sheets configuration
    const SHEET_ID = '15Q-M5bChfS2bSxZ-DKOIRiCHHoWU_rt4XCKep03qxRc'
    const RANGE = 'Sheet1!A:D' // Assuming columns A-D for name, mobile, email, message
    
    // Create the row data
    const timestamp = new Date().toISOString()
    const rowData = [
      [timestamp, name, mobile, email || '', message || '']
    ]
    
    // Google Sheets API URL
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}:append?valueInputOption=RAW`
    
    // Get Google API key from secrets
    const GOOGLE_API_KEY = Deno.env.get('GOOGLE_API_KEY')
    
    if (!GOOGLE_API_KEY) {
      throw new Error('Google API key not configured')
    }
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GOOGLE_API_KEY}`,
      },
      body: JSON.stringify({
        values: rowData
      })
    })
    
    if (!response.ok) {
      const errorData = await response.text()
      console.error('Google Sheets API error:', errorData)
      throw new Error(`Google Sheets API error: ${response.status}`)
    }
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form data submitted successfully' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
    
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})