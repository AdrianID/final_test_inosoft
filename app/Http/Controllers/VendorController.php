<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VendorController extends Controller
{
    public function getVendor(){
        $path = base_path() ."/Dummy/data_vendor.json";
        $json = json_decode(file_get_contents($path),true);
        return response()->json($json);
    }
    public function getInvoiceTo(){
        $path = base_path() ."/Dummy/data_invoice.json";
        $json = json_decode(file_get_contents($path),true);
        return response()->json($json);
    }
    public function getCustomer(){
        $path = base_path() ."/Dummy/data_customer.json";
        $json = json_decode(file_get_contents($path),true);
        return response()->json($json);
    }
}
