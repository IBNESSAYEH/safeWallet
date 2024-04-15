<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Wallet;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
/**
 * @OA\Info(
 *     title="SafeWallet API",
 *     version="1.0.0",
 *     description="API documentation for SafeWallet",
 *     @OA\Contact(
 *         email="admin@safewallet.com",
 *         name="SafeWallet Team"
 *     ),
 *     @OA\License(
 *         name="MIT License",
 *         url="https://opensource.org/licenses/MIT"
 *     )
 * )
 */

class UserController extends Controller
{
    /**
 * Register a new user.
 *
 * @OA\Post(
 *     path="/api/register",
 *     tags={"User"},
 *     summary="Register a new user",
 *     @OA\Response(
 *         response=201,
 *         description="User created successfully"
 *     )
 * )
 */

    public function register(Request $request)
    {

        $user = user::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'role_id' => 2,
        ]);

        $compte = Wallet::create([
            'user_id' => $user->id,
            'balance' => 0,
        ]);

        return response()->json([
            'message' => 'User created successfully'
        ], Response::HTTP_CREATED);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid credentials!'
            ], Response::HTTP_UNAUTHORIZED);
        }
    
        $user = Auth::user();
        
      

        $userRole = $user->role; 
        
        $token = $user->createToken('token')->plainTextToken;
    
        return response()->json([
            'user' => $user,
            
            'token' => $token,
            'message' => 'Login successful'
        ], Response::HTTP_OK);
    }
    
    public function user()
    {
        $user = Auth::user();
    
        if ($user) {
            $userRole = $user->role; 
            return response()->json([
                'user' => $user,
            ], Response::HTTP_OK);
        } else {
            return response()->json([
                'message' => 'User not found'
            ], Response::HTTP_NOT_FOUND);
        }
    }
    

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ], Response::HTTP_OK);
    }



    public function dataForUser(Request $request)
    {
        $user = Auth::user();
        $balance = $user->wallet->balance;
        return response()->json([
            'user' => $user,
            'wallet' => $balance
        ]);
    }



    
    public function showUsers(Request $request)
    {
        $users = User::with('wallet')->get();
        return response()->json([
            'users' => $users
        ]);
    }
}
