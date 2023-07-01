---
excerpt: A proof that that the sum of the first n cubes is the square of the nth triangular number
---
<script type="text/javascript" id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
</script>

You ask a person is they want to keep one dollar or add the next cube and give it to the next person. If the $$n$$th person keeps the money, the amount they receive is the sum of the first $$n$$ cubes. 

Here is the python code to calculate this number:
```python
def sum_of_n_cubes(n):
    answer=0
    for i in range(n):
        answer += ((i+1)**3)
    return answer
```
Note that this method has $$O(n)$$ time complexity. 

We will prove, by induction, that the sum of the first $$n$$ cubes is equal to the square of the $$n$$th triangular number. That is, 

$$\sum^n_{i=1} i^3 = \left(\sum^n_{i=1}i\right)^2$$

For the base case, $$n=1$$, we have:

$$
\begin{align}
\sum^1_{i=1} i^3 &= \left(\sum^1_{i=1}i\right)^2 \\
1^3 &= (1)^2 \\
1 &= 1
\end{align}
$$

For the inductive step, suppose that
$$
\begin{equation}
\sum^n_{i=1} i^3 = (\sum^n_{i=1}i)^2 \\
\end{equation}
$$
is true for some $$n$$. We will show that the equation holds for $$n+1$$. 

$$
\begin{align}
\sum^n_{i=1} i^3 &= \left(\sum^n_{i=1}i\right)^2 \\
\sum^n_{i=1} i^3 + (n+1)^3 &= \left(\sum^n_{i=1}i\right)^2 + (n+1)^3 \\
\sum^{n+1}_{i=1} i^3 &= \left(\sum^n_{i=1}i\right)^2 + (n+1)^3 \\
\end{align}
$$

To finish our proof, we have to show that

$$
\begin{equation}
\left(\sum^{n+1}_{i=1}i\right)^2 = \left(\sum^n_{i=1}i\right)^2 + (n+1)^3
\end{equation}
$$

Let $$A=\sum^n_{i=1}i$$. Then we have:

$$
\begin{align}
(A + (n + 1))^2 &= A^2 + (n+1)^3 \\
A^2 + 2A(n + 1) + (n+1)^2 &= A^2 + (n+1)^3 \\
2A(n + 1) + (n+1)^2 &= (n+1)^3 \\
2A + (n+1) &= (n+1)^2 \\
2A + (n+1) &= n^2 + 2n + 1 \\
2A &= n^2 + 2n + 1 - (n+1) \\
2A &= n^2 + n \\
2A &= n(n+1) \\
A &= \frac{n(n+1)}{2}
\end{align}
$$

Then we have $$\sum^n_{i=1}i = \frac{n(n+1)}{2}$$ which is the equation for the $$n$$th partial sum. Thus, we are done. $$\square$$


Now, we have another method of calculating the sum of the first $$n$$ cubes. Here is the code to calculate it using this new method: 
```python
def squared_triangular_number(n):
    return int(((n)*(n+1)/2)**2)
```
Note that this method can be done in constant time. 