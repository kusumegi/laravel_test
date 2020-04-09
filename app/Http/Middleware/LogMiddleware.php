<?php
namespace App\Http\Middleware;

use Closure;

class LogMiddleware
{

    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // アクション(コントローラー)実行前にログの書き出し
        file_put_contents('/Applications/MAMP/htdocs/laravel/access.log', date('Y-m-d H:i:s') . '    ' . $request->fullUrl() . "\n", FILE_APPEND);

        return $next($request);
    }
}
