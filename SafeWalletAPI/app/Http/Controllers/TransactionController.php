<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller
{
    //
    public function getMyTransactions(Request $request)
    {
        $user = auth()->user();
        $transactions = Transaction::where('sender_wallet_id', $user->wallet->id)
            ->orWhere('recipient_wallet_id', $user->wallet->id)
            ->get();

        return response()->json([
            'transactions' => $transactions
        ]);
    }   
}
