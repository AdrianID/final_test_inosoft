<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function getCurrency(){
        $path = base_path() ."/Dummy/data_currency.json";
        $json = json_decode(file_get_contents($path),true);
        return response()->json($json);
    }
    public function getUOM(){
        $path = base_path() ."/Dummy/data_uom.json";
        $json = json_decode(file_get_contents($path),true);
        return response()->json($json);
    }
    public function getChargeTo(){
        $path = base_path() ."/Dummy/data_chargeto.json";
        $json = json_decode(file_get_contents($path),true);
        return response()->json($json);
    }
}
