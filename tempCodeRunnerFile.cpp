
#include <stdio.h>
#include <bits/stdc++.h>
using namespace std;

void getMissingAndRepeating(int arr[], int n)
{
    int xor_all = 0;
    for (int i = 1; i <= n; i++)
        xor_all ^= i;
    
    for (int i = 0; i < n; i++)
        xor_all ^= arr[i];
    
    int rightmost_set_bit = xor_all & -xor_all;

    int xor_setA = 0;
    int xor_setB = 0;

    for (int i = 1; i <= n; i++)
    {
        if (i & rightmost_set_bit)
            xor_setA ^= i;
        else
            xor_setB ^= i;
    }

    for (int i = 0; i < n; i++)
    {
        if (arr[i] & rightmost_set_bit)
            xor_setA ^= arr[i];
        else
            xor_setB ^= arr[i];
    }

    for (int i = 0; i < n; i++)
    {
        if (arr[i] == xor_setA)
        {
            cout << "Repeating Number: " << xor_setA << endl;
            cout << "Missing Number: " << xor_setB << endl;
            break;
        }
        else if (arr[i] == xor_setB)
        {
            cout << "Repeating Number: " << xor_setB << endl;
            cout << "Missing Number: " << xor_setA << endl;
            break;
        }
    }
}

int main()
{
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    getMissingAndRepeating(arr, n);
    return 0;
}