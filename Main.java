package dsaLearning.com;

import java.util.Scanner;

public class Main {

	static FibBrut fb1=new FibBrut();
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		System.out.println("Please enter the n  : ");
		int n=sc.nextInt();
		
		int result=fb1.fibBrut(n);
		System.out.println(result);
		

	}

}
